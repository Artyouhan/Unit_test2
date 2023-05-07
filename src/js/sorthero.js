export default function sortPlayer(list) {
    return list.sort((a,b) => b.health - a.health );
} 