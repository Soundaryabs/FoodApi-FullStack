const Category = require("../model/category");
const assert = require("assert");

module.exports ={
    getCategory:(req,res) =>{
        Category.find((err,response)=>{
            if(err) assert.equal(err,null);
            res.json(response);
        });
    },
    createCategory:(req,res) =>{
        let category = new Category(req.body);
        category
        .save()
        .then((item) =>{
            res.status(200).json({msg:"category added successfully"});
        })
        .catch((err)=>{
            res.status(400).send("Unable to save value to database");
        });
    },
    getSingleCategory:(req,res) =>{
        let id = req.params.id;
        Category.findOne({category_id:id},function(err,response){
            if(err) assert.equal(err,null);
            if (response === null){
                res.status(200).json({msg:"No category found"});
            }
            res.json(response);
        });
    },
    deleteCategory:(req,res)=>{
        Category.findByIdAndDelete({_id:req.params.id},function(
            err,
            response
        ){
            if(err) res.send(err);
            else res.json("Successfully deleted");
        });
    },
};