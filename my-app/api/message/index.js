module.exports = async function (context, req) {
    const author = process.env.REACT_APP_AUTHOR;
    context.res.json({
        text: `The function is triggered by ${author}`
    });
};