<template>
   <div class="emb-privacy-policy-wrap">
      <emb-page-title
			heading="Privacy Policy"
			subHeading="Your Information is fully secure with us."
		>
		</emb-page-title>
      <div class="section-gap bg-white">
         <div class="container">
            <div class="privacy-page">
               <div 
                  class="emb-card mb-12 pa-6"
                  v-for="(policy,key) in policylist"
                  :key='key'
               >
                  <h4 class="mb-4">{{policy.title}}</h4>
                  <p>{{policy.desc}}</p>
               </div>
               <div class="emb-card  pa-6">
                  <h4 class="mb-4">If you have any Legal issue or dispute then contact the following:</h4>
                  <h5>Address:</h5>
                  <p>
                     103,Grand Ways Road <br>
                     Necholim City <br>
                     New York
                  </p>
                  <h5>Email:</h5>
                  <p>email@emaillorem.com</p>
                  <h5>Contact No.</h5>
                  <p>123789-839 00</p>
                  <p>123789-839 00</p>
               </div>
            </div>
         </div>
      </div>
   </div>             
</template>

<script>
export default {
	data () {
		return{
			policylist:[
				{
					title:' What type of information we gathered on our site',
					desc :'Sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore. dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.',
				},
				{
					title:'Are our payments and cards information secured?',
					desc :'Sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore. dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.',
				},
				{
					title:'Are we give information of user to ad agenices?',
					desc :'erum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore. dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.',
				}
			]
		}
	}      
}
</script>
