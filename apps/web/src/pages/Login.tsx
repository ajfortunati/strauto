// import {
//   Button,
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui'
import { Activity } from 'lucide-react'
import { motion } from 'motion/react'

interface LoginProps {
  onLogin: () => void
}

export function Login({ onLogin }: LoginProps) {
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-xl p-8 max-w-md w-full'>
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-xl mb-4'>
            <Activity className='w-8 h-8 text-white' strokeWidth={2.5} />
          </div>
          <h1 className='text-slate-900 mb-2'>Strauto</h1>
          <p className='text-slate-600'>Automate your Strava activities</p>
        </div>

        <div className='space-y-4'>
          <motion.button
            onClick={onLogin}
            className='w-full bg-[#FC4C02] hover:bg-[#E64402] text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 select-none'
          >
            <svg className='w-5 h-5' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169' />
            </svg>
            Connect with Strava
          </motion.button>

          <div className='text-center text-sm text-slate-500'>
            <p>
              By connecting, you authorize Strauto to access your Strava data
            </p>
          </div>
        </div>

        <div className='mt-8 pt-6 border-t border-slate-200'>
          <h3 className='text-slate-900 mb-3 text-center'>
            What you can automate:
          </h3>
          <ul className='space-y-2 text-sm text-slate-600'>
            <li className='flex items-start gap-2'>
              <motion.span
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.75 }}
                className='text-orange-500 mt-0.5 select-none'
              >
                ✓
              </motion.span>
              <span>Auto-update activity names and descriptions</span>
            </li>
            <li className='flex items-start gap-2'>
              <motion.span
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.75 }}
                className='text-orange-500 mt-0.5 select-none'
              >
                ✓
              </motion.span>
              <span>Apply gear based on activity type</span>
            </li>
            <li className='flex items-start gap-2'>
              <motion.span
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.75 }}
                className='text-orange-500 mt-0.5 select-none'
              >
                ✓
              </motion.span>
              <span>Set privacy settings automatically</span>
            </li>
            <li className='flex items-start gap-2'>
              <motion.span
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.75 }}
                className='text-orange-500 mt-0.5 select-none'
              >
                ✓
              </motion.span>
              <span>Add custom tags and commute flags</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
