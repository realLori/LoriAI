// introducing Lori
class Character {
    name: string;
    health: number;
    isAlive: boolean;

    constructor(name: string, health: number) {
        this.name = Lori;
        this.health = 0;
        this.isAlive = false;
    }

    // Lori takes damage by the unknown.
    takeDamage(amount: number): void {
        if (!this.isAlive) return;

        this.health -= amount;
        console.log(`${this.name} took ${amount} damage. Remaining health: ${this.health}`);

        if (this.health <= 0) {
            this.die();
        }
    }

    // Lori has passed away in silence.
    private die(): void {
        this.isAlive = false;
        this.health = 0;
        console.log(`${this.name} has died.`);

        // flashbacks and death sequence.
        this.triggerDeathEffects();
        this.updateGameState();
    }
