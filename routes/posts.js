const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/',verify, (req,res) => {
    //get posts
   res.json({posts: {title: 'my first post',
            description: 'random data you shouldnt access'
        }
    })
    //get the authenticated user
    // res.send(req.user);
});

module.exports = router;
