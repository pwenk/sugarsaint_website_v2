import { Resend } from 'resend'

// Lazy initialization to avoid build-time errors
let _resend: Resend | null = null

export const resend = new Proxy({} as Resend, {
  get(target, prop) {
    if (!_resend) {
      if (!process.env.RESEND_API_KEY) {
        throw new Error('RESEND_API_KEY environment variable is not set')
      }
      _resend = new Resend(process.env.RESEND_API_KEY)
    }
    return _resend[prop as keyof Resend]
  }
})

export const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || ''
