import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, ArrowLeft } from "lucide-react"
import DataSourceForm from "@/components/data-source-form"

export default function AddDataSourcePage() {
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
        <div className="flex items-center mb-6">
          <Link href="/catalog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Catalog
            </Button>
          </Link>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Add Data Source</CardTitle>
            <CardDescription>Create a new connection to a data source in your organization</CardDescription>
          </CardHeader>
          <CardContent>
            <DataSourceForm />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

