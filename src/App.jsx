```jsx
import { useState } from 'react'
import { Button } from '../components/ui/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            Hello World! 👋
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Welcome to your React + Vite + Tailwind CSS application
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <Button 
              onClick={() => setCount(count + 1)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Click me!
            </Button>
            <span className="text-lg font-medium text-gray-700">
              Count: {count}
            </span>
          </div>
          
          {count > 0 && (
            <p className="text-sm text-green-600 animate-pulse">
              Great! You've clicked {count} time{count !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Built with ⚡ Vite • ⚛️ React • 🎨 Tailwind CSS</p>
        </div>
      </div>
    </div>
  )
}

export default App
```