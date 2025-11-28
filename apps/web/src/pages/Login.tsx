import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from '@/components/ui'

interface LoginProps {
  onLogin: () => void
}

export function Login({ onLogin }: LoginProps) {
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-4'>
      <Card className='bg-white rounded-lg shadow-xl p-8 max-w-md w-full'>
        <CardHeader className='flex-col'>
          <CardTitle className='flex justify-center'>Strauto</CardTitle>
          <div className='text-center'>Automate your Strava activities</div>
        </CardHeader>
        <Button onClick={onLogin}>Connect with Strava</Button>
        <CardDescription className='text-center'>
          By connecting, you authorize Strauto to access your Strava data
        </CardDescription>
      </Card>
    </div>
  )
}
