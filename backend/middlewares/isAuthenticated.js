import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.token; // Ensure this matches your cookie setup
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);
        req.id = decode.userId; // Attach user ID to request
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(401).json({
            message: "Invalid token",
            success: false,
        });
    }
};

export default isAuthenticated;
