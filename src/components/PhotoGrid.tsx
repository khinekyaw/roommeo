'use client'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export interface Photo {
  id: string
  src: string
}

const PhotoGrid = ({ photos }: { photos: Photo[] }) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Lightbox open={open} close={() => setOpen(false)} slides={photos} />
      <Button variant='faded' size='sm' onClick={() => setOpen(true)}>
        Show all photos
      </Button>
    </div>
  )
}

export default PhotoGrid
