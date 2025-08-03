import Love  from "../model/user.js";
import mongoose from "mongoose";
import multer from "multer";
import base64 from "base-64"


export async function home(req,res) {
    res.status(200).render('home')
    
}

export async function getlove(req,res){
    try {
        const body = req.body;
         const bname = req.body.bname;
         const gname = req.body.gname;
          const boyBuffer = req.files['boyimage']?.[0]?.buffer || null;
          const girlBuffer = req.files['girlimage']?.[0]?.buffer || null;

            const boyImageBase64 = boyBuffer ? `data:image/jpeg;base64,${boyBuffer.toString('base64')}` : '';
            const girlImageBase64 = girlBuffer ? `data:image/jpeg;base64,${girlBuffer.toString('base64')}` : '';

          if (bname === 'kaish mikrani' || bname ==='kaish' && gname === 'nisha' || gname === 'nisha jaiswal' || gname ==='pushpa' || gname === 'pushpa khushwaha'){
           var  percentage = 95;
          }else{

              //  calculate love score
              const combined = bname + gname + boyImageBase64 + girlImageBase64;
              let score = 0;
              for (let char of combined) {
                  score += char.charCodeAt(0);
                }
                var percentage = score % 100;
            }
       // save the name in db
           const love = await Love.create({
            boyname: bname,
            girlname: gname,
            boyimages: boyImageBase64,
            girlimages: girlImageBase64,
            lovepercentages: percentage || 0
        })
          res.render('result', {
    body,
    percentage,
    boyImageBase64,
    girlImageBase64

  })

    } catch (error) {
        console.error("erro while saveing data", error);
        return res.status(500).send("internal server error")
    }


}
