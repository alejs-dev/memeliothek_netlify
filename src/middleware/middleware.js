const logRequestMethod = (req, res, next) => {
    console.log(req.method);
    next();
}

const logHostName = (req, res, next) => {
    console.log(req.hostname);
    next();
}

const middlewareFuntions = {
    logRequestMethod,
    logHostName
}

export default middlewareFuntions;