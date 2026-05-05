const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (authHeader === 'admin123') {
        next(); // allow access
    } else {
        res.status(403).send('Access Denied');
    }
};

module.exports = authMiddleware;
