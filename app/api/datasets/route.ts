import { NextResponse } from "next/server"
import { getAllItems, getItemById, createItem, updateItem, deleteItem, queryItems } from "@/lib/db"

const COLLECTION = "datasets"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (id) {
    const item = getItemById(COLLECTION, id)
    if (!item) {
      return NextResponse.json({ error: "Dataset not found" }, { status: 404 })
    }
    return NextResponse.json(item)
  }

  // Handle queries
  const query: Record<string, any> = {}
  const domain = searchParams.get("domain")
  const quality = searchParams.get("quality")
  const sourceId = searchParams.get("sourceId")

  if (domain) query.domain = domain
  if (quality) query.quality = quality
  if (sourceId) query.sourceId = Number.parseInt(sourceId)

  // If there are query parameters, filter the results
  const items = Object.keys(query).length > 0 ? queryItems(COLLECTION, query) : getAllItems(COLLECTION)

  return NextResponse.json(items)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.source || !data.domain) {
      return NextResponse.json({ error: "Name, source, and domain are required" }, { status: 400 })
    }

    const newItem = createItem(COLLECTION, {
      ...data,
      quality: data.quality || "Medium",
      tables: data.tables || 0,
      columns: data.columns || 0,
    })

    return NextResponse.json(newItem, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request data" }, { status: 400 })
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 })
    }

    const data = await request.json()
    const updatedItem = updateItem(COLLECTION, id, data)

    if (!updatedItem) {
      return NextResponse.json({ error: "Dataset not found" }, { status: 404 })
    }

    return NextResponse.json(updatedItem)
  } catch (error) {
    return NextResponse.json({ error: "Invalid request data" }, { status: 400 })
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }

  const success = deleteItem(COLLECTION, id)

  if (!success) {
    return NextResponse.json({ error: "Dataset not found" }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}

