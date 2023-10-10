'use client'
import React from 'react'
import { Select, SelectItem } from '@nextui-org/select'
import Flag from 'react-flagkit'

import { locales, usePathname, useRouter } from '../navigation'
import { useLocale } from 'next-intl'

const LANGUAGES = [
  {
    key: locales[0],
    title: 'English (US)',
    country: 'US',
  },
  {
    key: locales[1],
    title: 'မြန်မာ',
    country: 'MM',
  },
  {
    key: locales[2],
    title: '日本語',
    country: 'JP',
  },
]

const LangSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  return (
    <Select
      items={LANGUAGES}
      size='sm'
      className='min-w-[10rem]'
      labelPlacement='outside'
      defaultSelectedKeys={[locale]}
      aria-label='Select a language'
      disallowEmptySelection
      onChange={(e) => {
        router.replace(pathname, { locale: e.target.value })
      }}
      renderValue={(items) =>
        items.map((item) => (
          <div key={item.key} className='flex space-x-2 items-center'>
            <Flag country={item.data?.country} className='w-5' />
            <p>{item.textValue}</p>
          </div>
        ))
      }
    >
      {(lang) => (
        <SelectItem key={lang.key} value={lang.key} textValue={lang.title}>
          <div className='flex space-x-2 items-center'>
            <Flag country={lang.country} className='w-5' />
            <p>{lang.title}</p>
          </div>
        </SelectItem>
      )}
    </Select>
  )
}

export default LangSwitcher
