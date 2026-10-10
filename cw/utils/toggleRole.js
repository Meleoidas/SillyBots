const colorRolesIds = [
    "1350785963814682644",
    "1350786002117197844",
    "1350786014423285812",
    "1350786008387555429",
    "1350786021536829511",
    "1350786040222187530",
    "1350786048363335700",
    "1350786033465299005",
    "1350786027572428881",
    "1350786056508932167",
];

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

async function removeColorRoles(member) {
    for (const roleId of colorRolesIds) {
        try {
            const role = member.guild.roles.cache.get(roleId);
            if (!role) {
                console.error(`Role with ID ${roleId} not found`);
                return false;
            }
            if (member.roles.cache.has(roleId)) {
                await member.roles.remove(role);
            }
        } catch (error) {
            console.error("Error removing role:", error);
            throw error;
        }
    }
}

module.exports = {
    toggleRole,
    removeColorRoles,
};
