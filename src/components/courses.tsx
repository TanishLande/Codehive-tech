"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ArrowRight, Clock, Code, FileText } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { Badge } from './ui/badge'

const Courses = () => {
    const router = useRouter();
  return (
    <>
    <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">We Offer Workshops & Short Courses</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Intensive, focused learning experiences designed to build practical skills in a short timeframe
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fullstack Development */}
            <Card className="bg-black border-zinc-800 hover:border-blue-900 transition-all">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-white">Fullstack Development</CardTitle>
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <CardDescription>Workshop</CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Clock className="h-4 w-4" />
                  <span>Short intensive course</span>
                </div>
                <p className="text-gray-300">Practical web development skills from frontend to backend.</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                onClick={() => router.push('#contact')}
                className="text-blue-500 p-0 flex items-center gap-2 hover:text-blue-400">
                  Contact for details <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Content Writing */}
            <Card className="bg-black border-zinc-800 hover:border-blue-900 transition-all">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-white">Content Writing</CardTitle>
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardDescription>Short Course</CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Clock className="h-4 w-4" />
                  <span>Flexible schedule</span>
                </div>
                <p className="text-gray-300">Create compelling digital content that engages audiences.</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                onClick={() => router.push('#contact')}
                className="text-blue-500 p-0 flex items-center gap-2 hover:text-blue-400">
                  Contact for details <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Blog Writing */}
            <Card className="bg-black border-zinc-800 hover:border-blue-900 transition-all">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-white">Blog Writing</CardTitle>
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardDescription>Workshop</CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Clock className="h-4 w-4" />
                  <span>Weekend intensive</span>
                </div>
                <p className="text-gray-300">Learn to create engaging blog content that builds audience.</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button  
                onClick={() => router.push('#contact')}
                className="text-blue-500 p-0 flex items-center gap-2 hover:text-blue-400">
                  Contact for details <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Badge className="bg-blue-900 text-white mb-4">Coming Soon</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">VFX & Motion Graphics</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our upcoming VFX workshops will cover everything from basic motion design to advanced visual effects for
              film and digital media.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-black border border-blue-900 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-2">Weekend Workshops</h3>
                <p className="text-gray-400">Intensive 2-day courses focused on specific VFX skills</p>
              </div>
              <div className="bg-black border border-blue-900 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-2">Short Courses</h3>
                <p className="text-gray-400">4-week programs with hands-on projects</p>
              </div>
            </div>

            {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white">Join Waitlist</Button> */}
          </div>

          <div className="md:w-1/2 relative">
            <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-black via-blue-950 to-black p-1">
              <div className="w-full h-full rounded-lg bg-black/80 flex items-center justify-center p-8 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-blue-900/10 animate-pulse"></div>
                </div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                <video 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    muted 
                    loop
                    playsInline
                >
                    <source src="/vfx-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
                <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-blue-900/20 blur-xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full bg-blue-900/20 blur-xl"></div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-900/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
      </>
  )
}

export default Courses