<template>
	<div class="container mt-4">
		<div class="justify-content-left">
			<div class="">
				<h1 class="font-weight-light text-center" v-if="user">
					Project Management
				</h1>
				<mdb-datatable
					:data="projects"
					striped
					bordered
					fixed
					scrollY
				/>
				<table
				class="table overflow-auto"
				>
				<thead>
					<tr>
						<th scope="col">#</th>
						<th
						v-for="field in fields"
						:key = "field.id">
						{{field}}
						</th>
					</tr>
				</thead>
				<tbody
				v-for="(item, index) in projects"
					:key="item.id">
					<tr>
						<th scope="row">{{index + 1}} </th>
						<td>
							<button
							class="btn btn-sm btn-outline-secondary mr-2"
							title="Edit Project"
							@click="$emit('', item.id)">
								<font-awesome-icon icon="edit"></font-awesome-icon>
							</button>
							<button
							class="btn btn-sm btn-outline-secondary mr-2"
							title="Update Project"
							@click="$emit('', item.id)">
								<font-awesome-icon icon="check-square"></font-awesome-icon>
							</button>
							<button
							class="btn btn-sm btn-outline-secondary"
							title="Delete Project"
							@click="$emit('', item.id)">
								<font-awesome-icon icon="trash"></font-awesome-icon>
							</button>
						</td>
						<!-- <td>
							{{ item.clientFirstName }}
						</td>
						<td>
							{{ item.projectName }}
						</td> -->
						<td
							v-for="field in fields"
							:key="field.id">
						{{item[field]}}
						</td>
						
					</tr>
				</tbody>

					

					<section class="pl-3 text-left align-self-center">
						
					</section>
				</table>
				</div>
		</div>
	</div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
	name: 'Projects',
	data: function() {
		return {
			fields: [
				'projectId',
				'projectName',
				'clientFirstName',
				'clientLastName',
				'clientEmail',
				'clientPhone',
				'clientCompany',
				'landloardFirstName',
				'landloardLastName',
				'landloardEmail',
				'landloardPhone',
				'locationAddress1',
				'locationAddress2',
				'locationCity',
				'locationState',
				'locationZipCode',
				'locationCountry',
				'projectBusiness',
				'projectCategory',
				'projectType',
				'projectStatus',
				'projectPrice',
				'soldDate',
				'quoteDate',
				'comment',
				'createdBy',
				'createdAt',
			],
			projectName: null,
		};
	},
	components: {
	FontAwesomeIcon
	},
	methods: {},
	props: ['user', 'projects'],
};
</script>
