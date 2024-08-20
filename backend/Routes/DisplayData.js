import express from 'express';
const router = express.Router();

router.post('/userData', (req, res) => {
    try {
        // Your logic here
        res.status(200).json({ data: global.sample_user }); // Example: Sending a JSON response with status code 200
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error"); // Use `res` to set the status code and send an error message
    }
});

export default router;