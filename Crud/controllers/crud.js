import Note from "../models/Note.js"
export const createNote = async (req, res) => {
    try {
        const note = await Note.create(req.body)
        res.status(200).json({note,message:"notes created successfully"})

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const readAll = async (req, res) => {
    try {
        const note = await Note.find();
        res.status(201).json(note)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const readOne = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        if (!note) {
            res.status(404).json({
                message: "No notes Found"
            })
        }
        res.status(201).json(note)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const update = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id,
            req.body,
            { new: true })
            if(!note){
                res.status(404).json({
                    message:"No Notes Found"
                })
            }
            res.json(note)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        
        if(!note){
            res.status(404).json({
                message:"NOte not Found to update"
            })
        }
    }
}


export const deleteNote=async(req,res)=>{
try {
    const note=await Note.findByIdAndDelete(req.params.id);
    if(!note){
        res.status(404).json({
            message:"NOte not found"
        })
    }
    res.json({message:"Note deleted successfully"})
} catch (error) {
    res.status(500).json({
        message:error.message
    })
}
}
