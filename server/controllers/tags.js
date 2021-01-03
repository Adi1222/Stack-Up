const Question = require('../models/question')


const getTags =  async (req, res) => {

    try{

        const tags = await Question.aggregate([
            { $project: {
                title: 1,
                body: 1,
                tags: 1
            } }, 
            { $unwind: '$tags' },
            { $group: { 
                _id: '$tags', 
                count: { $sum: 1 }
             } },
             { $sort: {
                 count: -1
             } }
        ]);

        if (! tags)  return res.json({ message: "No Tags Present" })

        res.json(tags);

         
    } catch (error) {

        console.error(error)
        return res.json('ERROR!!!')

    }

}


const searchTags =  async (req, res) => {

    //const { tag = '' } = req.params; // if tag name not specified

    const { tag } = req.params;

    try {

        const tags = await Question.aggregate([
            { $project: { tags: 1 } },
            { $unwind: '$tags' },
            { $group: { _id: '$tags', count: { $sum: 1 } } },
            { $match: { _id: tag } },
            { $sort: { count: -1 } } // decreasing order
        ]);

        res.json(tags);

    } catch(error) {
        console.error(error)
        return res.json('ERROR!!!')
    }

}

module.exports = {
    getTags,
    searchTags
}