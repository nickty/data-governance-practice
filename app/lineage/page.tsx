import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, GitBranch, Search, Share2 } from "lucide-react"
import LineageGraph from "@/components/lineage-graph"

export default function LineagePage() {
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
              <Link href="/lineage" className="transition-colors hover:text-foreground/80 text-foreground">
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
          <h1 className="text-2xl font-bold">Data Lineage</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search assets..." className="w-[200px] sm:w-[300px] pl-8" />
            </div>
            <Button>
              <Share2 className="mr-2 h-4 w-4" />
              Export Lineage
            </Button>
          </div>
        </div>

        <Tabs defaultValue="visualization" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="visualization">Lineage Visualization</TabsTrigger>
            <TabsTrigger value="mapping">Lineage Mapping</TabsTrigger>
          </TabsList>
          <TabsContent value="visualization">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Data Lineage Visualization</CardTitle>
                  <CardDescription>Visualize data flow across systems and processes</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineageGraph />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="mapping">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Lineage Mapping</CardTitle>
                  <CardDescription>Define and manage data lineage relationships</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Lineage Mapping Tool</h3>
                      <Button variant="outline" size="sm">
                        <GitBranch className="mr-2 h-4 w-4" />
                        Add Mapping
                      </Button>
                    </div>
                    <div className="border rounded-md p-4">
                      <p className="text-muted-foreground text-sm mb-4">
                        Create and manage data lineage mappings between systems, datasets, and processes. Define
                        source-to-target relationships and document transformation logic.
                      </p>
                      <div className="grid grid-cols-1 gap-4">
                        <Card className="p-4">
                          <h4 className="font-medium mb-2">Oil Production Data Flow</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            Map the flow of production data from wellhead sensors to analytics dashboards
                          </p>
                          <Button variant="outline" size="sm">
                            Map Lineage
                          </Button>
                        </Card>
                        <Card className="p-4">
                          <h4 className="font-medium mb-2">Reservoir Management Data</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            Track data flow for reservoir management from geological surveys to simulation models
                          </p>
                          <Button variant="outline" size="sm">
                            Map Lineage
                          </Button>
                        </Card>
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

