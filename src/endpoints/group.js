const API_URL = 'http://127.0.0.1:8000';


/**Call to the API to get all the groups
 * @returns {Promise} Promise with the response of the API
 * @throws {Error} If the response is not 200
 * @throws {Error} If the response is not JSON
 */
export async function getGroups() {
    fetch(`${API_URL}/groups/`)
    .then(response => console.log(response))
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

/**Call to the API to get a group
 * @param {number} id - The id of the group
 * @returns {Promise} Promise with the response of the API
 * @throws {Error} If the response is not 200
 * @throws {Error} If the response is not JSON
 */
export async function getGroup(id) {
    fetch(`${API_URL}/groups/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

/**Call to the API to create a group\
 * Group data must be in the format:
 * {
 * "name": "string",
 * "group_members": [
 *     {
 *       "name": "string",
 *       "last_name": "string",
 *       "email": "string"
 *    }
 * ]
 * }
 * @param {object} groupData - The data of the group
 * @returns {Promise} Promise with the response of the API
 * @throws {Error} If the response is not 200
 * @throws {Error} If the response is not JSON
 */
export async function createGroup(groupData) {
    fetch(`${API_URL}/groups/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(groupData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

/**Call to the API to update a group
 * Group data must be in the format:
 * {
 * "name": "string",
 * }
 * @param {number} id - The id of the group
 * @param {object} groupData - The data of the group
 * @returns {Promise} Promise with the response of the API
 * @throws {Error} If the response is not 200
 * @throws {Error} If the response is not JSON
 */
export async function updateGroup(id, groupData) {
    fetch(`${API_URL}/groups/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(groupData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

/**Call to the API to add a member to a group
 * Member data must be in the format:
 * {
 * "name": "string",
 * "last_name": "string",
 * "email": "string"
 * }
 * @param {number} id - The id of the group
 * @param {object} memberData - The data of the member
 * @returns {Promise} Promise with the response of the API
 * @throws {Error} If the response is not 200
 * @throws {Error} If the response is not JSON
 */
export async function addMemberToGroup(id, memberData) {
    fetch(`${API_URL}/groups/${id}/members`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(memberData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

/**Call to the API to update a member of a group
 * Member data must be in the format:
 * {
 * "name": "string",
 * "last_name": "string",
 * "email": "string"
 * }
 * @param {number} group_id - The id of the group
 * @param {number} member_id - The id of the member
 * @param {object} memberData - The data of the member
 * @returns {Promise} Promise with the response of the API
 * @throws {Error} If the response is not 200
 * @throws {Error} If the response is not JSON
 */
export async function updateMemberFromGroup(group_id, member_id, memberData) {
    fetch(`${API_URL}/groups/${group_id}/members/${member_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(memberData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

/**Call to the API to delete a member from a group
 * @param {number} group_id - The id of the group
 * @param {number} member_id - The id of the member
 * @returns {Promise} Promise with the response of the API
 * @throws {Error} If the response is not 200
 * @throws {Error} If the response is not JSON
 */
export async function deleteMemberFromGroup(group_id, member_id) {
    fetch(`${API_URL}/groups/${group_id}/members/${member_id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

/**Call to the API to delete a group
 * @param {number} id - The id of the group
 * @returns {Promise} Promise with the response of the API
 * @throws {Error} If the response is not 200
 */
export async function deleteGroup(id) {
    fetch(`${API_URL}/groups/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

