<template>
   <div class="shop-content-wrap">
		<template v-if="gridListView==true && listData != null">
			<v-row>
				<v-col
					v-for="(category,index) in listData"
					cols="12" 
					sm="6"
					md="4"
					lg="3"
					:key="index"
				>						
					<product-item :data="category" @deleteProduct="itemDeleted"></product-item>
				</v-col>				
			</v-row>
		</template>
		<template v-else>
			<product-items-list-view :data="listData" @deleteProduct="itemDeleted"></product-items-list-view>			
		</template>

   </div>   
</template>

<script>
import ProductItem from "./ProductItem";
import products from "Assets/data/adminProducts";
import ProductItemsListView from './ProductItemsListView.vue'

export default {
	props: ['colxs','colsm','colmd','collg','colxl',"gridListView"],
	data(){
		return{
			products,
			headersForListView: [
				{
					text: "ID",
					sortable: false,
					value: "ID"
				},
				{
					text: "Image",
					sortable: false,
					value: "Image"
				},
				{
					text: "Name",
					sortable: false,
					value: "Name"
				},
				{
					text: "Brand",
					sortable: false,
					value: "Brand"
				},
				{
					text: "Category",
					sortable: false,
					value: "Category"
				},
				{
					text: "Product Code",
					sortable: false,
					value: "Product Code"
				},
				{
					text: "Discount Price",
					sortable: false,
					value: "Discount Price"
				},
				{
					text: "Price",
					sortable: false,
					value: "Price"
				},
				{
					text: "Action",
					sortable: false,
					value: "Action"
				}
			],
			listData:[]
		}
	},
	mounted(){
		for(let categoryKey in products){
			for(let indexOflistData in products[categoryKey])
			{
				this.listData.push(products[categoryKey][indexOflistData]);
			}
		}
	},
	methods:{
		itemDeleted(item){
			let deletedToDoList = this.listData;
			let index = deletedToDoList.indexOf(item);
			this.listData.splice(index, 1);
		}
	},
	components: {
		ProductItem,
		ProductItemsListView
	}
};
</script>
