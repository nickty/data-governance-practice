import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, ArrowLeft, BookOpen, School, Briefcase, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Database className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">DataGov Pro</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/catalog" className="transition-colors hover:text-foreground/80">
                Data Catalog
              </Link>
              <Link href="/profiling" className="transition-colors hover:text-foreground/80">
                Data Profiling
              </Link>
              <Link href="/governance" className="transition-colors hover:text-foreground/80">
                Governance
              </Link>
              <Link href="/lineage" className="transition-colors hover:text-foreground/80">
                Lineage
              </Link>
              <Link href="/policies" className="transition-colors hover:text-foreground/80">
                Policies
              </Link>
              <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="container max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">About Data Governance Practice Platform</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive simulation environment for learning and practicing data governance concepts, tools, and
                methodologies
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Purpose
                </CardTitle>
                <CardDescription>Why this application was created</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    The Data Governance Practice Platform was developed to provide a hands-on simulation environment for
                    professionals to learn and practice data governance concepts without requiring access to expensive
                    enterprise tools like Informatica IDQ, EDC, and Axon.
                  </p>
                  <p>
                    Data governance roles require a unique combination of technical, business, and communication skills.
                    While theoretical knowledge is valuable, practical experience with governance tools and
                    methodologies is essential for success in these roles. This platform bridges the gap between theory
                    and practice.
                  </p>
                  <p>
                    By simulating real-world data governance scenarios in the Oil & Gas industry, users can develop
                    practical skills in implementing governance frameworks, data quality management, metadata
                    management, and policy development without the risks and constraints of production environments.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <School className="mr-2 h-5 w-5" />
                    Learning Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Hands-on experience with data governance tools and processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Risk-free environment to experiment with governance techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Understanding of industry-specific governance challenges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Practice in implementing data quality measures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Experience with data lineage mapping and visualization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Career Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Preparation for roles like Data Governance Manager, Data Steward, and Chief Data Officer
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Development of skills required for Informatica certifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Portfolio-building opportunities to demonstrate governance expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Understanding of cross-functional collaboration in governance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Simulated Tool Experience
                </CardTitle>
                <CardDescription>Enterprise tools simulated in this platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">Informatica Enterprise Data Catalog (EDC)</h3>
                    <p className="text-sm text-muted-foreground">
                      Our Data Catalog module simulates EDC functionality, allowing you to discover, catalog, and
                      organize data assets across your simulated enterprise. Practice with business glossaries, data
                      dictionaries, and metadata management.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Informatica Data Quality (IDQ)</h3>
                    <p className="text-sm text-muted-foreground">
                      The Data Profiling module mimics IDQ capabilities for assessing and improving data quality. Define
                      and run quality rules, monitor quality metrics, and implement data quality improvements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Informatica Axon</h3>
                    <p className="text-sm text-muted-foreground">
                      Our Governance and Policies modules simulate Axon's enterprise data governance capabilities. Build
                      governance frameworks, define roles and responsibilities, and develop and enforce data policies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

