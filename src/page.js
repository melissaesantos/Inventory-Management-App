//This sets up our component with necessary imports and a basic structure. 
//The `’use client’` directive at the top indicates that this is a client-side component.

'use client'

import { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button, Modal, TextField } from '@mui/material'
import { firestore } from '@/firebase'
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
}

export default function Home() {
  // We'll add our component logic here
    const [inventory, setInventory] = useState([])
    const [open, setOpen] = useState(false)
    const [itemName, setItemName] = useState('')
  return (
    <Box>
      <Typography variant="h1">Inventory Management</Typography>
    </Box>
  )

}