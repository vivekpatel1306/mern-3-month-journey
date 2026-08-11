import connectDB from '@/config/database';
import Todo from '@/models/Todo';

// GET single todo
export async function GET(request, { params }) {
  await connectDB();
  try {
    const { id } = await params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return Response.json({ success: false, error: 'Todo not found' }, { status: 404 });
    }
    return Response.json({ success: true, data: todo });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
} 

// PUT update todo
export async function PUT(request, { params }) {
  await connectDB();
  try {
    const { id } = await params;
    const body = await request.json();
    const todo = await Todo.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return Response.json({ success: false, error: 'Todo not found' }, { status: 404 });
    }
    return Response.json({ success: true, data: todo });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
}

// DELETE todo
export async function DELETE(request, { params }) {
  await connectDB();
  try {
    const { id } = await params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return Response.json({ success: false, error: 'Todo not found' }, { status: 404 });
    }
    return Response.json({ success: true, data: {} });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
}