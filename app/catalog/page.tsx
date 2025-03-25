import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, FileText, FolderOpen, Search, Tag } from "lucide-react"
import DataSourceTable from "@/components/data-source-table"
import DatasetList from "@/components/dataset-list"

export default function CatalogPage() {
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
              <Link href="/catalog" className="transition-colors hover:text-foreground/80 text-foreground">
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
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Enterprise Data Catalog (EDC)</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search catalog..." className="w-[200px] sm:w-[300px] pl-8" />
            </div>
            <Button>
              <FolderOpen className="mr-2 h-4 w-4" />
              Add Data Source
            </Button>
          </div>
        </div>

        <Tabs defaultValue="sources" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="sources">Data Sources</TabsTrigger>
            <TabsTrigger value="datasets">Datasets</TabsTrigger>
            <TabsTrigger value="glossary">Business Glossary</TabsTrigger>
            <TabsTrigger value="tags">Tags & Classifications</TabsTrigger>
          </TabsList>
          <TabsContent value="sources">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Data Sources</CardTitle>
                  <CardDescription>Manage connections to your enterprise data sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <DataSourceTable />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="datasets">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Datasets</CardTitle>
                  <CardDescription>Browse and manage datasets from your connected data sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <DatasetList />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="glossary">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Business Glossary</CardTitle>
                  <CardDescription>Define and manage business terms and their relationships</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Oil & Gas Industry Glossary</h3>
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        Add Term
                      </Button>
                    </div>
                    <div className="border rounded-md p-4">
                      <p className="text-muted-foreground text-sm">
                        Create a business glossary to standardize terminology across your organization. Define terms,
                        establish hierarchies, and link terms to data assets.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="tags">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Tags & Classifications</CardTitle>
                  <CardDescription>Create and manage tags to classify your data assets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Classification System</h3>
                      <Button variant="outline" size="sm">
                        <Tag className="mr-2 h-4 w-4" />
                        Add Classification
                      </Button>
                    </div>
                    <div className="border rounded-md p-4">
                      <p className="text-muted-foreground text-sm">
                        Develop a classification system to categorize data based on sensitivity, domain, quality, and
                        other attributes. Apply tags to data assets for improved governance and discoverability.
                      </p>
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

