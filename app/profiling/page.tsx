import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Play, Search, Settings } from "lucide-react"
import ProfilerDashboard from "@/components/profiler-dashboard"
import QualityRules from "@/components/quality-rules"

export default function ProfilingPage() {
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
              <Link href="/profiling" className="transition-colors hover:text-foreground/80 text-foreground">
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
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Data Profiling (IDQ)</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search datasets..." className="w-[200px] sm:w-[300px] pl-8" />
            </div>
            <Button>
              <Play className="mr-2 h-4 w-4" />
              Run Profiler
            </Button>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="dashboard">Profiling Dashboard</TabsTrigger>
            <TabsTrigger value="rules">Quality Rules</TabsTrigger>
            <TabsTrigger value="settings">Profiler Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Data Profiling Results</CardTitle>
                  <CardDescription>View and analyze data profiling results for your datasets</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProfilerDashboard />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="rules">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Data Quality Rules</CardTitle>
                  <CardDescription>Define and manage data quality rules for your datasets</CardDescription>
                </CardHeader>
                <CardContent>
                  <QualityRules />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Profiler Configuration</CardTitle>
                  <CardDescription>Configure profiling settings and schedules</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Profiling Configuration</h3>
                      <Button variant="outline" size="sm">
                        <Settings className="mr-2 h-4 w-4" />
                        Save Settings
                      </Button>
                    </div>
                    <div className="border rounded-md p-4">
                      <p className="text-muted-foreground text-sm mb-4">
                        Configure how the data profiler analyzes your datasets. Set sampling rates, profiling depth, and
                        schedule automated profiling jobs.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Sampling Rate (%)</label>
                          <Input type="number" defaultValue="100" min="1" max="100" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Profiling Schedule</label>
                          <Input type="text" defaultValue="Daily at 2:00 AM" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

