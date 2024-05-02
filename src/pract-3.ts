{
    const greetFriends = (...friends: String[]) => {
        friends.forEach((friend: String) => console.log(`hello dear ${friend}`));
    };
    
    greetFriends('Michale', 'Rose', 'Jack');
}