/**
 * @beta
 * 表示记分板上的分数持有者，一个可能持有分数的对象。
 *
 * 需要注意的是，此对象并不直接与某个实体或虚拟玩家关联。
 *
 * 每次实体或虚拟玩家重新在记分板上拥有分数条目时，都会使用一个新的分数持有者对象。
 *
 * Contains an identity of the scoreboard item.
 */
export class ScoreboardIdentity {
    private constructor();
    /**
     * @remarks
     * 此分数持有者在玩家视角显示的名称。
     *
     * Returns the player-visible name of this identity.
     *
     */
    readonly displayName: string;
    /**
     * @remarks
     * 此分数持有者的 ID。
     *
     * Identifier of the scoreboard identity.
     *
     */
    readonly id: number;
    /**
     * @remarks
     * 此分数持有者的类型。
     *
     * Type of the scoreboard identity.
     *
     */
    readonly 'type': ScoreboardIdentityType;
    /**
     * @remarks
     * 返回此分数持有者对应实体的对象。
     *
     * If the scoreboard identity is an entity or player, returns
     * the entity that this scoreboard item corresponds to.
     *
     * @returns 返回未确定值。
     * @throws 抛出未确定错误。
     */
    getEntity(): Entity | undefined;
    /**
     * @remarks
     * 检测此对象是否仍然关联到一个有效的分数持有者。
     *
     * Returns true if the ScoreboardIdentity reference is still
     * valid.
     *
     * @returns 返回未确定值。
     */
    isValid(): boolean;
}