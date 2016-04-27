/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    'use strict';
    let l = new ListNode(-1)
    let result = l
    let up = 0
    while(l1 || l2 || up!==0 ){
        let digit = parseInt(l1?l1.val:0) + parseInt(l2?l2.val:0) + up
        up = digit>=10?1:0
        digit = digit>=10?digit%10:digit
        l1 = l1?l1.next:null
        l2 = l2?l2.next:null
        l.next = new ListNode(digit)
        l=l.next
    }
    return result.next
};
