import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-10'>
            <div>
                <h3 className='text-xl'>Question no:1</h3>
                <h2 className='text-xl font-bold'>Difference between Javascript and Nodejs</h2>
                <p><span style={{ color: '#64B9B4' }} className='font-semibold text-lg'>Javascript:</span> JavaScript is a programming language used to write scripts on
                    a website.JavaScript can only be run in the browser.JavaScript is
                    used for client-side and frontend development.JavaScript is capable
                    enough to add HTML and play with DOM.JavaScript can run on any
                    browser engine, such as JS Core in Safari and SpiderMonkey in
                    Firefox.Node js mostly used in web development.Nodejs is written in C, C++ and Javascript.
                </p>
                <p><span style={{ color: '#64B9B4' }} className='font-semibold text-lg'>NodeJs:</span>We can use it to run JavaScript outside of the browser with Node JS.
                    NodeJS is mostly used for server-side and server-side development.
                    Nodejs, on the other hand, cannot add HTML tags.
                    V8 is the JavaScript engine inside node.js that parses and runs JavaScript.</p>
            </div>
            <div>
                <h3 className='text-xl'>Question no:2</h3>
                <h2 className='text-xl font-bold'>When should you use node.js and when mongodb?</h2>
                <p><span style={{ color: '#64B9B4' }} className='font-semibold text-lg'>Nodejs:</span> Any project requires a programming environment and a runtime
                    library that provides you with basic programming tools / support
                    and can compile or interpret your code. Nodejs is an example
                    tool for JavaScript programming languages. There are other
                    similar tools for other languages ​​like Python, Java, PHP, C #,
                    C ++, Go, etc. So, if you want to write any kind of
                    standalone program or server in JavaScript, you can use
                    nodes for it. If your application needs the ability to
                    constantly store data so that you can search efficiently
                    or update it, you will usually use some form
                    of a database. There are dozens of popular databases.So,
                    as I learnt basic javascript language it is easy for
                    me to use and explore node.js</p>
                <p> <span style={{ color: '#64B9B4' }} className='font-semibold text-lg'>Mongodb:</span>
                    If my application needs the ability to persistently store
                    data in a way that I can efficiently query or update it later,
                    then I would typically use some form of database. There are
                    dozens of popular databases. MongoDB is one such database.
                    MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples
                    of other databases.As a beginner it is easy for me to understand
                    database and work efficiently as it is a noSql database.SQL
                    databases are little bit difficult for fresher .
                </p>
            </div>
            <div>
                <h3 className='text-xl'>Question no:3</h3>
                <h2 className='text-xl font-bold'>What are the difference between SQL and noSQL?</h2>
                <p><span style={{ color: '#64B9B4' }} className='font-semibold text-lg'>SQL Difference noSQL</span>
                    SQL databases are related, and NoSQL databases are
                    unrelated.SQL Database uses structured query language
                    and has a default schema.The NoSQL database contains dynamic
                    schemas for unorganized data.SQL databases based on
                    are vertically scalable, while NoSQL databases based on are
                    horizontally scalable.SQL databases are table-based,
                    while NoSQL databases store documents, key values,
                    graphs, or wide columns.SQL databases are good for
                    multi-row transactions, while NoSQL is good for
                    unstructured data like documents or JSON.
                </p>
            </div>
            <div>
                <h3 className='text-xl'>Question no:4</h3>
                <h2 className='text-xl font-bold'>What are the purpose of jwt and How does it works?</h2>
                <p><span style={{ color: '#64B9B4' }} className='font-semibold text-lg'>JWT</span>
                    JWT (JSON Web Token) is an open value that is used to
                    share security information between two parties - a
                    client and a server. Each JWT contains an encoded
                    JSON object, which contains a set of claims. JWTs
                    are signed using a cryptographic algorithm to
                    ensure that claims cannot be changed after the
                    token is issued. Unlike all other web tokens,
                    JWT contains a set of claims. Used to transmit information
                    between two parties to a claim. This claim depends on
                    the use of the hand. For example, a claimant may claim
                    who gave the token, how long it may be valid, or what
                    permission has been granted to the client.
                </p>
            </div>
        </div>
    );
};

export default Blogs;