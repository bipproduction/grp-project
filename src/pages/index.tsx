import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LayoutDefault from './login'
import Dashboard from './dashboard'
import Login from '@/layout/auth/form-login'
import apiSeederAgama from './api/seeder/sumber-daya-partai/api-seeder-agama'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <LayoutDefault/>
    </>
  )
}
