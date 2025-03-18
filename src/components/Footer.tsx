'use client'

import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function CustomFooter() {
  return (
    <>
      <Head>
        <link rel="preload" href="/logos/discord_logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/logos/linkedin_logo.png" as="image" type="image/png" />
        <link rel="preload" href="/logos/instagram_logo.svg" as="image" type="image/svg+xml" />
      </Head>

      <footer className="mt-16 pt-8 border-t border-lavender/20 text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          
          <motion.a 
            href="https://discord.gg/EnbZYUMmaW" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-midnight-900/95 text-white rounded-lg shadow-md border border-lavender/20 transition-all duration-150"
            whileHover={{ 
              backgroundColor: 'rgba(102, 51, 153, 0.9)', 
              scale: 1.1,
              boxShadow: "0px 0px 10px rgba(102, 51, 153, 0.8)", 
              transition: { duration: 0.05 }
            }}
          >
            <Image 
              src="/logos/discord_logo.svg" 
              alt="Discord" 
              width={20} 
              height={20} 
              className="mr-2" 
              loading="eager" 
            />
            <span className="font-medium transition-colors duration-150 group-hover:text-purple-300">Discord</span>
          </motion.a>

          <motion.a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-midnight-900/95 text-white rounded-lg shadow-md border border-lavender/20 transition-all duration-150"
            whileHover={{ 
              backgroundColor: 'rgba(10, 102, 194, 0.9)', 
              scale: 1.1,
              boxShadow: "0px 0px 10px rgba(10, 102, 194, 0.8)", 
              transition: { duration: 0.05 }
            }}
          >
            <Image 
              src="/logos/linkedin_logo.png" 
              alt="LinkedIn" 
              width={20} 
              height={20} 
              className="mr-2" 
              loading="eager"
            />
            <span className="font-medium transition-colors duration-150 group-hover:text-blue-300">LinkedIn</span>
          </motion.a>

          <motion.a 
            href="https://instagram.com/qualms_msu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-midnight-900/95 text-white rounded-lg shadow-md border border-lavender/20 transition-all duration-150"
            whileHover={{ 
              backgroundColor: 'rgba(193, 53, 132, 0.9)', 
              scale: 1.1,
              boxShadow: "0px 0px 10px rgba(193, 53, 132, 0.8)", 
              transition: { duration: 0.05 }
            }}
          >
            <Image 
              src="/logos/instagram_logo.svg" 
              alt="Instagram" 
              width={20} 
              height={20} 
              className="mr-2" 
              priority={true} 
            />
            <span className="font-medium transition-colors duration-150 group-hover:text-pink-300">Instagram</span>
          </motion.a>

        </div>
        <p className="text-sm text-ice-500/70">
          © {new Date().getFullYear()} qUALMS • Michigan State University
        </p>
      </footer>
    </>
  )
}
