var entries = [
    {id: 1,title: '第一篇', body: '正文', published: '6/1/2014'},
    {id: 2,title: '第二篇', body: '正文', published: '6/2/2014'},
    {id: 3,title: '第三篇', body: '正文', published: '6/3/2014'},
    {id: 4,title: '第四篇', body: '正文', published: '6/4/2014'},
    {id: 5,title: '第五篇', body: '正文', published: '6/5/2014'},
    {id: 6,title: '第六篇', body: '正文', published: '6/6/2014'}
];

exports.getBlogEntries = function(){
    return entries;
};

exports.getBlogEntry = function(id){
    var entry = null;
    entries.forEach(function(v,k){
        if(v.id == id){
            entry = entries[k];
        }
    });
    return entry;
};