import React, { Component } from "react";
//import { Page, Layout } from "@shopify/polaris";
import { ReactiveBase, CategorySearch } from "@appbaseio/reactivesearch";


class SearchTemplate extends Component {
    render(){
        return(
            <ReactiveBase app = "store" 
                          credentials = "4HWI27QmA:58c731f7-79ab-4f55-a590-7e15c7e36721"
                          url  =  "URL where the Elasticsearch cluster is hosted">
                <CategorySearch componentId = "searchbox"
                                dataField = "model"
                                categoryField = "brand.keyword"
                                placeholder = "Search for cars"> 
                </CategorySearch>

            </ReactiveBase>
    )}
}

export default SearchTemplate;