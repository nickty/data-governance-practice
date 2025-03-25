import { NextResponse } from "next/server"
import { getAllItems, getItemById, createItem, updateItem, deleteItem, queryItems } from "@/lib/db"

const COLLECTION = "data-sources"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (id) {
    const item = getItemById(COLLECTION, id)
    if (!item) {
      return NextResponse.json({ error: "Data source not found" }, { status: 404 })
    }
    return NextResponse.json(item)
  }

  // Handle queries
  const query: Record<string, any> = {}
  const type = searchParams.get("type")
  const status = searchParams.get("status")
  const owner = searchParams.get("owner")

  if (type) query.type = type
  if (status) query.status = status
  if (owner) query.owner = owner

  // If there are query parameters, filter the results
  const items = Object.keys(query).length > 0 ? queryItems(COLLECTION, query) : getAllItems(COLLECTION)

  return NextResponse.json(items)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.type) {
      return NextResponse.json({ error: "Name and type are required" }, { status: 400 })
    }

    const newItem = createItem(COLLECTION, {
      ...data,
      status: data.status || "Disconnected",
      lastScan: data.lastScan || new Date().toISOString().split("T")[0],
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
      return NextResponse.json({ error: "Data source not found" }, { status: 404 })
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
    return NextResponse.json({ error: "Data source not found" }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}

