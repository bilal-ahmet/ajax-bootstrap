exports.getIndex = (req, res) => {
    res.render('index');
};

exports.handleAjax = (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({message: 'ajax request basarılı'});
};