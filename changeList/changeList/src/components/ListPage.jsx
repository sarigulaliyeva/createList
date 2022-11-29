import React from "react";
import Item from  "./Item";
const ListPage = ({ searchResults }) => {
    const results = searchResults.map(item => <Item key={item.id} item={item} />)

    const content = results?.length ? results : <article><p>No Matching Posts</p></article>

    return (
        <main>{content}</main>
    )
};

export default ListPage;
