import connectDB from '@/config/database';
import Todo from '@/models/Todo';

// GET all todos
export async function GET() {
  await connectDB();
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    return Response.json({ success: true, data: todos });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
}

// POST create new todo
export async function POST(request) {
  await connectDB();
  try {
    const body = await request.json();
    const todo = await Todo.create(body);
    return Response.json({ success: true, data: todo }, { status: 201 });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
}