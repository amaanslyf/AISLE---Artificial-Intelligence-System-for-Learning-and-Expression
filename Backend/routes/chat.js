import express from "express";
import Thread from "../models/thread.js";
import getOpenAIAPIResponse from "../utils/groqapi.js";


const router = express.Router();

router.post("/test",async (req, res) => {
    try{
        const thread = new Thread({
            threadId: "xyz",
            title: "New Chat",
            
        })
        const response= await thread.save();
        res.send(response);
    }catch(error){
        console.log(error);
        res.status(500).json({error:"Failed to save in db"});
        }
    });

router.get("/thread" ,async (req, res)=>{
    try{
        const threads = await Thread.find({}).sort({updatedAt:-1});  //sorted in descending order
        res.send(threads);
    }catch(error){
        console.log(error);
        res.status(500).json({error:"Failed to display threads"});
        }
});


router.get("/thread/:threadId" ,async (req, res)=>{
    const {threadId} = req.params;
    try{
        const thread = await Thread.findOne({threadId});
        
        if(!thread){
            return res.status(404).json({error:"Thread not found"});
        }
        res.json(thread.messages);
    }catch(error){
        console.log(error);
        res.status(500).json({error:"Failed to display thread"});
        }
})

router.delete("/thread/:threadId" ,async (req, res)=>{
    const {threadId} = req.params;
    try{
        const deletedThread = await Thread.findOneAndDelete({threadId});
        
        if(!deletedThread){
            return res.status(404).json({error:"Thread not found"});
        }
        res.status(200).json({success:"Thread deleted successfully"});
    }catch(error){
        console.log(error);
        res.status(500).json({error:"Failed to delete thread"});
        
    }
    
})

router.post("/chat", async(req, res) => {
    const {threadId, message} = req.body;

    if(!threadId || !message) {
        res.status(400).json({error: "missing required fields"});
    }

    try {
        let thread = await Thread.findOne({threadId});

        if(!thread) {
            //create a new thread in Db if it doesn't exist
            thread = new Thread({
                threadId,
                title: message,
                messages: [{role: "user", content: message}]
            });
        } else {
            thread.messages.push({role: "user", content: message});
        }

        const assistantReply = await getOpenAIAPIResponse(message);

        thread.messages.push({role: "assistant", content: assistantReply});
        thread.updatedAt = new Date();

        await thread.save();
        res.json({reply: assistantReply});
    } catch(err) {
        console.log(err);
        res.status(500).json({error: "something went wrong"});
    }
});

export default router;