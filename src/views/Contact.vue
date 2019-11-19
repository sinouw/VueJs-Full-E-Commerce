<template>
   <div class="emb-contact-wrap">
		<emb-page-title
			heading="Contact Us"
			subHeading="Share your feedback with us."
		>
		</emb-page-title>
		<div class="emb-contact-content">
         <div class="Contact-page">
            <div class="contact-map">
					<emb-google-map></emb-google-map>
            </div>
			</div>
			<div class="contact-info-wrapper">
				<v-container grid-list-xl py-0>
					<div class="section-gap">
						<v-layout row wrap>
							<v-flex sm12 md12 lg5 xl5>
								<div class="sec-title">
									<h2 class="v-layout justify-start align-center">Contact Info</h2>
									<h5 class="font-italic mb-6">If you have any problems,suggestions and feedback then please feel free to contact with us. Choose our communication sources. We will love to hear from you</h5> 
								</div>
								<div class="mb-6">
									<h3>Call</h3>
									<a href="tel:12345688" class="color-inherit">{{contactInfo.number}}</a>
								</div>
								<div class="mb-6">
									<h3>Mail</h3>
									<a href="mailto:support@theironnetwork.org" class="color-inherit">{{contactInfo.email}}</a>
								</div>
								<div class="mb-6">
									<h3>Address</h3>
									<p>{{contactInfo.address}}</p>
								</div>
							</v-flex>
							<v-flex sm12 md12 lg7 xl7>
								<div class="sec-title">
									<h2>Write to Us</h2>
								</div>
								<v-form  ref="form" v-model="valid">
									<v-text-field type="text" placeholder="First Name" :rules="inputRules.basictextRules"></v-text-field>
									<v-text-field	type="text"	placeholder="Last Name" :rules="inputRules.basictextRules"></v-text-field>
									<v-text-field type="email" placeholder="Email" :rules="emailRules"></v-text-field>
									<v-text-field	type="text"	placeholder="Subject" :rules="inputRules.basictextRules"></v-text-field>
									<v-textarea rows="2" label="Leave a Message" :rules="inputRules.basictextRules"></v-textarea>
									<v-btn class="accent mx-0 mt-4" large @click.stop.prevent="saveDetails">	Send Message</v-btn>
								</v-form>
							</v-flex>
						</v-layout>
					</div>
				</v-container>
			</div>
		</div>
   </div>
</template>

<script>

export default {
	data(){
		return{
			valid: false,
			contactInfo: {
				number: "+123 90394903",														// Contact No.
				address:'1899 Cemetery Street,MEDFORD - 1452451 New York ',			// Contact Address
				email:'support@theironnetwork.org'	
			},
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+/.test(v) || 'E-mail must be valid'
      	],
			inputRules: {
				basictextRules: [v => !!v || 'This field should not be empty']
			}
		}
	},
	methods:{
		saveDetails(){
			this.$refs.form.validate()
		}
	}
}
</script>

