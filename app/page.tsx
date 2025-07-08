import { Plane, Users, Radio, Shield, Star, ChevronRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"



export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-slate-900 text-white">
        <Link className="flex items-center justify-center" href="#">
          <Plane className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">ATC24 US Airforce</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-300 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-300 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-300 transition-colors" href="#join">
            Join Us
          </Link>
          <Link className="text-sm font-medium hover:text-blue-300 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit bg-blue-600 text-white">
                    Elite Military Roleplay
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    ATC24 US Airforce
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Experience authentic military aviation roleplay with professional air traffic control, realistic
                    operations, and a dedicated community of aviation enthusiasts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Join Server
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                    asChild
                  >
                    <Link href="https://careers.usaf24.com" target="_blank">
                      View Careers
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span></span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="ATC24 Fighter Aircraft"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="400"
                  src="/images/fighter-jet.png"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About ATC24 - USAF</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ATC24 US Airforce is a specialized military aviation department within the larger ATC24 community. We
                  focus on providing the most realistic and immersive US Air Force roleplay experience, bringing
                  together aviation enthusiasts, military personnel, and simulation pilots from around the world.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="ATC24 Transport Aircraft"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                height="310"
                src="/images/transport-aircraft.png"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Professional Operations</h3>
                  <p className="text-gray-500">
                    Experience military-grade operations with authentic procedures, realistic air traffic control, and
                    structured command hierarchy that mirrors real-world military aviation.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Training Programs</h3>
                  <p className="text-gray-500">
                    Comprehensive training programs for pilots, air traffic controllers, and ground crew. Progress
                    through ranks and earn certifications in various aircraft and specializations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Server Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover what makes ATC24 the premier destination for military aviation roleplay
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Radio className="h-8 w-8 text-blue-600" />
                  <CardTitle>Professional ATC</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    24/7 air traffic control with certified controllers providing realistic communication and flight
                    guidance using proper military protocols.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Military Ranks</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Progress through authentic military rank structure with promotions based on performance, training
                    completion, and leadership skills.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Plane className="h-8 w-8 text-blue-600" />
                  <CardTitle>Diverse Aircraft</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Fly a wide variety of military aircraft from fighters to transport planes, each with authentic
                    flight models and operational procedures.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-600" />
                  <CardTitle>Active Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Join a vibrant community of aviation enthusiasts with regular events, training sessions, and
                    collaborative missions.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Star className="h-8 w-8 text-blue-600" />
                  <CardTitle>Realistic Missions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Participate in carefully crafted military operations including combat missions, transport
                    operations, and search and rescue scenarios.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ExternalLink className="h-8 w-8 text-blue-600" />
                  <CardTitle>Custom Mods</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Enhanced gameplay with custom modifications, realistic weather systems, and detailed military bases
                    for authentic operations.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section id="join" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Serve?</h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the ranks of ATC24 US Airforce and experience the most authentic military aviation roleplay
                  available. Follow our verification process to gain access.
                </p>
              </div>
              <div className="space-y-6">
                {/* Step-by-step process */}
                <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
                  <Card className="bg-slate-800 border-slate-700 text-white relative">
                    <div className="absolute -top-3 -left-3 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <CardHeader>
                      <CardTitle>Join Main ATC24 Discord</CardTitle>
                      <CardDescription className="text-gray-300">
                        First, join the main ATC24 Discord server and complete their verification process. This gives
                        you access to the broader ATC24 community.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                        <Link href="https://discord.gg/gZq56qk9c7" target="_blank">
                          Join ATC24 Main
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800 border-slate-700 text-white relative">
                    <div className="absolute -top-3 -left-3 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <CardHeader>
                      <CardTitle>Join US Airforce Department</CardTitle>
                      <CardDescription className="text-gray-300">
                        Once you're verified in the main ATC24 server, join our specialized US Airforce department to
                        begin your military aviation career.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                        <Link href="https://discord.gg/PpqUd4qQEr" target="_blank">
                          Join US Airforce Dept
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Important notice */}
                <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-4 max-w-2xl">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="text-left">
                      <h4 className="font-semibold text-blue-400 mb-1">ATC24 Department</h4>
                      <p className="text-sm text-gray-300">
                        We are a specialized US Air Force department within the larger ATC24 community. Join the main
                        ATC24 server first, then our department for focused military aviation roleplay.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-400">
                  <p>Main ATC24: discord.gg/gZq56qk9c7 | US Airforce Dept: discord.gg/PpqUd4qQEr</p>
                  <p className="text-xs mt-1">Game server details provided after verification in both servers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100"
      >
        <p className="text-xs text-gray-500">© 2024 ATC24 US Airforce Roleplay Server. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Rules
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Forums
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Support
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

