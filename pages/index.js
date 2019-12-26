import React, { Component, useCallback, useState } from 'react';
import { Layout, Page, Button, FooterHelp, Frame, Scrollable, Card, Loading, TextField, FormLayout, Link } from '@shopify/polaris';
import { Mutation, Query } from 'react-apollo';
import { Context } from '@shopify/app-bridge-react'
import gql from 'graphql-tag';

const GetProducts = gql`
query{
	shop{
	  name
	}
	products(first:10){
	  edges{
		node{
		  id
		  title
		  description
		  descriptionHtml
		  variants(first:10){
			edges{
			  node{
				id
			  }
			}
		  }
		  images(first:10){
			edges{
			  node{
				id
				originalSrc
			  }
			}
		  }
		}
	  }
	}
  }
`



class Index extends Component {

	state = {
		isLoading: true,
		products: [],
		error: null
	}

	fetchProducts() {
		fetch(`https://cda3a817.ngrok.io/api/products`).then(response => response.json())
			.then(data => this.setState({
				products: data,
				isLoading: false,
			}))
			.catch(error => this.setState({ error, isLoading: false }));
	}

	componentDidMount() {
		this.fetchProducts();
	}

	render() {
		const { isLoading, products } = this.state;


		return (
			<Page>
				<Layout>
					<Layout.AnnotatedSection title="Database Infomation" description="Connection Info: localhost;user1; MySQL  Search all Products in Database">
						<Card sectioned>
							<Scrollable shadow style={{ height: '375px' }}>
								<p>
									{!isLoading ? (
										products.map(product => {
											const { ProductID, ProductName, NumofProductInInventory } = product;
											return (
												<div key={ProductName}>
													<p>ProductID:{ProductID}</p>
													<p>ProductName:{ProductName}</p>
													<p>NumofProductInInventory:{NumofProductInInventory}</p>
													<hr></hr>
												</div>
											);
										})
									) : (<h3>Retriving Data...</h3>)
									}
									<h1>{this.props.ProductName}</h1>
								</p>
							</Scrollable>
						</Card>
					</Layout.AnnotatedSection>
					<Layout.AnnotatedSection title="Database Infomation" description="Search Product by ProductID in Databse">
						<Card sectioned>
							<FormLayout>
								<TextField helpText={<span>input id for Search</span>}></TextField>
								<Button submit>Click for submit</Button>
							</FormLayout>
						</Card>
					</Layout.AnnotatedSection>
					<Layout.AnnotatedSection>
						<Query query={GetProducts}>
							{({data, loading, error}) => {
								if(loading){return <div>Loading...</div>;}
								if(error){return <div>{error.message}</div>;}
								console.log(data);
							}}
						</Query>
					</Layout.AnnotatedSection>
					<Layout.AnnotatedSection>
						{products.map(product => {
							const { ProductID, ProductName, NumofProductInInventory } = product;
						})
						}
					</Layout.AnnotatedSection>
				</Layout>
				<FooterHelp>
					Learn more about <Link url="https://reactjs.org/docs/components-and-props.html">React Component Function</Link>.
  				</FooterHelp>
			</Page>
		)
	}
}

export default Index;







	// fetchProdutbyID() {
	// 	fetch(`https://cda3a817.ngrok.io/api/product/${id}`).then(response => response.json())
	// 		.then(data => this.setState({
	// 			product: data,
	// 			isLoadingornot: false,
	// 		}))
	// 		.catch(error => this.setState({ error, isLoadingornot: false }));
	// }

	// componentDidMount(){
	// 	this.fetchProdutbyID();
	// }