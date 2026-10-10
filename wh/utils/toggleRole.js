async function toggleRole(member, roleId) {
    try {
        const role = member.guild.roles.cache.get(roleId);

        if (!role) {
            console.error(`Role with ID ${roleId} not found`);
            return false;
        }

        if (member.roles.cache.has(roleId)) {
            await member.roles.remove(role);
            return false;
        } else {
            await member.roles.add(role);
            return true;
        }
    } catch (error) {
        console.error("Error toggling role:", error);
        throw error;
    }
}

module.exports = {
    toggleRole
};
