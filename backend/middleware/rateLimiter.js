import ratelimit from "../config/upstash.js";


const rateLimiter = async (req, res , next) => {
    try {
        const { success } = await ratelimit.limit("my-limit-key");

        if (!success) {
            return res.status(429).json({ error: "Too many requests! Please wait." });
        }

        next();
    }
    catch(error)
    {
        console.error("Rate Limit error", error);
        next(error);
    }
}


export default rateLimiter;