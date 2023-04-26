import{j as i,a as n,R,m as I,S as k}from"./@uiw-e232caf8.js";import{R as A,r as w}from"./react-5cc2acaa.js";import{c as M}from"./react-dom-ffb09b4b.js";import{D as P}from"./@codemirror-531b836d.js";import{e as W,R as N}from"./react-router-f2b581ea.js";import{L as p,c as j}from"./react-router-dom-9c95b87f.js";import{c as x}from"./classnames-5c20d0be.js";import"./@babel-6c5c234b.js";import"./@lezer-7cc0d4df.js";import"./scheduler-04ce0582.js";import"./crelt-7bb88e1d.js";import"./style-mod-ae491175.js";import"./w3c-keyname-aa008802.js";import"./@remix-run-486e32ce.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function H({problem:e}){const a=A.useCallback((r,l)=>{},[]);return i("div",{id:"codeEditor",children:[n(R,{id:"codeMirror",value:e.sample_code,height:"90vh",theme:I,extensions:[P({jsx:!0})],onChange:a}),i("div",{className:"console-compile-btns",children:[n("div",{className:"console-btn",children:n("button",{id:"console-btn",children:"Console"})}),i("div",{className:"run-submit-btn",children:[n("button",{id:"run-btn",children:"Run"}),n("button",{id:"submit-btn",children:"Submit"})]})]})]})}const G=({problem:e})=>i("div",{id:"problem-panel",children:[n("div",{className:"prob-title",children:i("h2",{children:[e.id,": ",e.title]})}),i("div",{className:"prob-desc",children:[n("p",{children:e.description})," "]}),e.examples.map((a,r)=>i("div",{className:"example",children:[i("h3",{children:["Example ",r+1,":"]}),i("div",{className:"example-container",children:[i("p",{children:[n("b",{children:"Input: "}),a.input]}),i("p",{children:[n("b",{children:"Output: "}),a.output]})]})]},r))]});const y=[{id:1,title:"Two Sum",difficulty:"Easy",acceptance_rate:"46.4%",description:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",examples:[{input:[2,7,11,15],output:[0,1]},{input:[3,2,4],output:[1,2]}],sample_code:`var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};`},{id:2,title:"Add Two Numbers",difficulty:"Medium",acceptance_rate:"35.9%",description:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.",examples:[{input:[[2,4,3],[5,6,4]],output:[7,0,8]},{input:[[0],[0]],output:[0]}],sample_code:`var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    while(l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    if(carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
};`},{id:3,title:"Longest Substring Without Repeating Characters",difficulty:"Medium",acceptance_rate:"30.0%",description:"Given a string s, find the length of the longest substring without repeating characters.",examples:[{input:"s = 'abcabcbb'",output:"3"},{input:"s = 'bbbbb'",output:"1"}],sample_code:`var lengthOfLongestSubstring = function(s) {
  let set = new Set(), left = 0, right = 0, maxLen = 0;
  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      maxLen = Math.max(maxLen, set.size);
      right++;
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return maxLen;
};`},{id:4,title:"Median of Two Sorted Arrays",difficulty:"Hard",acceptance_rate:"30.0%",description:`Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
Follow up: The overall run time complexity should be O(log (m+n)).`,examples:[{input:"nums1 = [1,3], nums2 = [2]",output:"2.00000"},{input:"nums1 = [1,2], nums2 = [3,4]",output:"2.50000"}],sample_code:`var findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length;
  if (len1 > len2) {
    [nums1, nums2] = [nums2, nums1];
    [len1, len2] = [len2, len1];
  }
  let low = 0, high = len1;
  while (low <= high) {
    let partition1 = Math.floor((low + high) / 2);
    let partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1;
    let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    let minRight1 = partition1 === len1 ? Infinity : nums1[partition1];
    let minRight2 = partition2 === len2 ? Infinity : nums2[partition2];
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((len1 + len2) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    }`},{id:5,title:"Longest Palindromic Substring",difficulty:"Medium",acceptance_rate:"29.3%",description:"Given a string s, return the longest palindromic substring in s.",examples:[{input:"s = 'babad'",output:"'bab'"},{input:"s = 'cbbd'",output:"'bb'"}],sample_code:`var longestPalindrome = function(s) {
  let start = 0, maxLen = 0;
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      left--;
      right++;
    }
    if (right - left - 1 > maxLen) {
      maxLen = right - left - 1;
      start = left + 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  return s.substring(start, start + maxLen);
};`},{id:6,title:"ZigZag Conversion",difficulty:"Medium",acceptance_rate:"38.7%",description:`The string \`s\` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

\`\`\`
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Explanation:
P   A   H   N
A P L S I I G
Y   I   R
\`\`\``,examples:[{input:'{ "s": "PAYPALISHIRING", "numRows": 3 }',output:'"PAHNAPLSIIGYIR"'},{input:'{ "s": "PAYPALISHIRING", "numRows": 4 }',output:'"PINALSIGYAHRPI"'}],sample_code:`var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill('');
  let curRow = 0, goingDown = false;
  for (const c of s) {
    rows[curRow] += c;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }
  return rows.join('');
};`},{id:7,title:"3Sum",difficulty:"Medium",acceptance_rate:"27.9%",description:"Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",examples:[{input:'{ "nums": [-1,0,1,2,-1,-4] }',output:"[[-1,-1,2],[-1,0,1]]"},{input:'{ "nums": [] }',output:"[]"}],sample_code:`var threeSum = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1, k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++, k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};`},{id:8,title:"Maximum Subarray",difficulty:"Easy",acceptance_rate:"52.5%",description:`Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.`,examples:[{input:'{ "nums": [-2,1,-3,4,-1,2,1,-5,4] }',output:"6"},{input:'{ "nums": [1] }',output:"1"}],sample_code:`var maxSubArray = function(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};`},{id:9,title:"Regular Expression Matching",difficulty:"Hard",acceptance_rate:"28.9%",description:`Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.`,examples:[{input:'{ "s": "aa", "p": "a" }',output:"false"},{input:'{ "s": "aa", "p": ".*" }',output:"true"}],sample_code:`var isMatch = function(s, p) {
  if (p.length === 0) return s.length === 0;
  const firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.');
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p));
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
};`},{id:10,title:"Word Ladder",difficulty:"Medium",acceptance_rate:"28.5%",description:`Given two words beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.`,examples:[{input:'{ "beginWord": "hit", "endWord": "cog", "wordList": ["hot","dot","dog","lot","log","cog"] }',output:"5"},{input:'{ "beginWord": "hit", "endWord": "cog", "wordList": ["hot","dot","dog","lot","log"] }',output:"0"}],sample_code:`var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  const visited = new Set();
  visited.add(beginWord);
  let queue = [beginWord];
  let level = 1;
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const currWord = queue.shift();
      if (currWord === endWord) return level;
      for (let j = 0; j < currWord.length; j++) {
        for (let k = 0; k < 26; k++) {
          const nextChar = String.fromCharCode(97 + k);
          const newWord = currWord.slice(0, j) + nextChar + currWord.slice(j + 1);
          if (wordSet.has(newWord) && !visited.has(newWord)) {
            visited.add(newWord);
            queue.push(newWord);
          }
        }
      }
    }
    level++;
  }
  return 0;
};`},{id:11,title:"3Sum Closest",difficulty:"Medium",acceptance_rate:"39.5%",description:"Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.",examples:[{input:'{ "nums": [-1,2,1,-4], "target": 1 }',output:"2"},{input:'{ "nums": [0,0,0], "target": 1 }',output:"0"}],sample_code:`var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) closestSum = sum;
      if (sum === target) return target;
      if (sum < target) left++;
      else right--;
    }
  }
  return closestSum;
};`},{id:12,title:"Spiral Matrix",difficulty:"Medium",acceptance_rate:"37.4%",description:"Given an m x n matrix, return all elements of the matrix in spiral order.",examples:[{input:"[[1,2,3],[4,5,6],[7,8,9]]",output:"[1,2,3,6,9,8,7,4,5]"},{input:"[[1,2],[3,4]]",output:"[1,2,4,3]"}],sample_code:`var spiralOrder = function(matrix) {
  const result = [];
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1, direction = 'right';
  while (top <= bottom && left <= right) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = 'down';
    } else if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = 'left';
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = 'up';
    } else if (direction === 'up') {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = 'right';
    }
  }
  return result;
};`},{id:13,title:"Two Sum",difficulty:"Easy",acceptance_rate:"46.4%",description:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",examples:[{input:[2,7,11,15],output:[0,1]},{input:[3,2,4],output:[1,2]}],sample_code:`var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};`},{id:14,title:"Add Two Numbers",difficulty:"Medium",acceptance_rate:"35.9%",description:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.",examples:[{input:[[2,4,3],[5,6,4]],output:[7,0,8]},{input:[[0],[0]],output:[0]}],sample_code:`var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    while(l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    if(carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
};`},{id:15,title:"Longest Substring Without Repeating Characters",difficulty:"Medium",acceptance_rate:"30.0%",description:"Given a string s, find the length of the longest substring without repeating characters.",examples:[{input:"s = 'abcabcbb'",output:"3"},{input:"s = 'bbbbb'",output:"1"}],sample_code:`var lengthOfLongestSubstring = function(s) {
  let set = new Set(), left = 0, right = 0, maxLen = 0;
  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      maxLen = Math.max(maxLen, set.size);
      right++;
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return maxLen;
};`},{id:16,title:"Median of Two Sorted Arrays",difficulty:"Hard",acceptance_rate:"30.0%",description:`Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
Follow up: The overall run time complexity should be O(log (m+n)).`,examples:[{input:"nums1 = [1,3], nums2 = [2]",output:"2.00000"},{input:"nums1 = [1,2], nums2 = [3,4]",output:"2.50000"}],sample_code:`var findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length;
  if (len1 > len2) {
    [nums1, nums2] = [nums2, nums1];
    [len1, len2] = [len2, len1];
  }
  let low = 0, high = len1;
  while (low <= high) {
    let partition1 = Math.floor((low + high) / 2);
    let partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1;
    let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    let minRight1 = partition1 === len1 ? Infinity : nums1[partition1];
    let minRight2 = partition2 === len2 ? Infinity : nums2[partition2];
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((len1 + len2) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    }`},{id:17,title:"Longest Palindromic Substring",difficulty:"Medium",acceptance_rate:"29.3%",description:"Given a string s, return the longest palindromic substring in s.",examples:[{input:"s = 'babad'",output:"'bab'"},{input:"s = 'cbbd'",output:"'bb'"}],sample_code:`var longestPalindrome = function(s) {
  let start = 0, maxLen = 0;
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      left--;
      right++;
    }
    if (right - left - 1 > maxLen) {
      maxLen = right - left - 1;
      start = left + 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  return s.substring(start, start + maxLen);
};`},{id:18,title:"ZigZag Conversion",difficulty:"Medium",acceptance_rate:"38.7%",description:`The string \`s\` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

\`\`\`
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Explanation:
P   A   H   N
A P L S I I G
Y   I   R
\`\`\``,examples:[{input:'{ "s": "PAYPALISHIRING", "numRows": 3 }',output:'"PAHNAPLSIIGYIR"'},{input:'{ "s": "PAYPALISHIRING", "numRows": 4 }',output:'"PINALSIGYAHRPI"'}],sample_code:`var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill('');
  let curRow = 0, goingDown = false;
  for (const c of s) {
    rows[curRow] += c;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }
  return rows.join('');
};`},{id:19,title:"3Sum",difficulty:"Medium",acceptance_rate:"27.9%",description:"Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",examples:[{input:'{ "nums": [-1,0,1,2,-1,-4] }',output:"[[-1,-1,2],[-1,0,1]]"},{input:'{ "nums": [] }',output:"[]"}],sample_code:`var threeSum = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1, k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++, k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};`},{id:20,title:"Maximum Subarray",difficulty:"Easy",acceptance_rate:"52.5%",description:`Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.`,examples:[{input:'{ "nums": [-2,1,-3,4,-1,2,1,-5,4] }',output:"6"},{input:'{ "nums": [1] }',output:"1"}],sample_code:`var maxSubArray = function(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};`},{id:21,title:"Regular Expression Matching",difficulty:"Hard",acceptance_rate:"28.9%",description:`Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.`,examples:[{input:'{ "s": "aa", "p": "a" }',output:"false"},{input:'{ "s": "aa", "p": ".*" }',output:"true"}],sample_code:`var isMatch = function(s, p) {
  if (p.length === 0) return s.length === 0;
  const firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.');
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p));
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
};`},{id:22,title:"Word Ladder",difficulty:"Medium",acceptance_rate:"28.5%",description:`Given two words beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.`,examples:[{input:'{ "beginWord": "hit", "endWord": "cog", "wordList": ["hot","dot","dog","lot","log","cog"] }',output:"5"},{input:'{ "beginWord": "hit", "endWord": "cog", "wordList": ["hot","dot","dog","lot","log"] }',output:"0"}],sample_code:`var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  const visited = new Set();
  visited.add(beginWord);
  let queue = [beginWord];
  let level = 1;
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const currWord = queue.shift();
      if (currWord === endWord) return level;
      for (let j = 0; j < currWord.length; j++) {
        for (let k = 0; k < 26; k++) {
          const nextChar = String.fromCharCode(97 + k);
          const newWord = currWord.slice(0, j) + nextChar + currWord.slice(j + 1);
          if (wordSet.has(newWord) && !visited.has(newWord)) {
            visited.add(newWord);
            queue.push(newWord);
          }
        }
      }
    }
    level++;
  }
  return 0;
};`},{id:23,title:"3Sum Closest",difficulty:"Medium",acceptance_rate:"39.5%",description:"Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.",examples:[{input:'{ "nums": [-1,2,1,-4], "target": 1 }',output:"2"},{input:'{ "nums": [0,0,0], "target": 1 }',output:"0"}],sample_code:`var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) closestSum = sum;
      if (sum === target) return target;
      if (sum < target) left++;
      else right--;
    }
  }
  return closestSum;
};`},{id:24,title:"Spiral Matrix",difficulty:"Medium",acceptance_rate:"37.4%",description:"Given an m x n matrix, return all elements of the matrix in spiral order.",examples:[{input:"[[1,2,3],[4,5,6],[7,8,9]]",output:"[1,2,3,6,9,8,7,4,5]"},{input:"[[1,2],[3,4]]",output:"[1,2,4,3]"}],sample_code:`var spiralOrder = function(matrix) {
  const result = [];
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1, direction = 'right';
  while (top <= bottom && left <= right) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = 'down';
    } else if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = 'left';
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = 'up';
    } else if (direction === 'up') {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = 'right';
    }
  }
  return result;
};`},{id:25,title:"Two Sum",difficulty:"Easy",acceptance_rate:"46.4%",description:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",examples:[{input:[2,7,11,15],output:[0,1]},{input:[3,2,4],output:[1,2]}],sample_code:`var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};`},{id:26,title:"Add Two Numbers",difficulty:"Medium",acceptance_rate:"35.9%",description:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.",examples:[{input:[[2,4,3],[5,6,4]],output:[7,0,8]},{input:[[0],[0]],output:[0]}],sample_code:`var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    while(l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    if(carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
};`},{id:27,title:"Longest Substring Without Repeating Characters",difficulty:"Medium",acceptance_rate:"30.0%",description:"Given a string s, find the length of the longest substring without repeating characters.",examples:[{input:"s = 'abcabcbb'",output:"3"},{input:"s = 'bbbbb'",output:"1"}],sample_code:`var lengthOfLongestSubstring = function(s) {
  let set = new Set(), left = 0, right = 0, maxLen = 0;
  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      maxLen = Math.max(maxLen, set.size);
      right++;
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return maxLen;
};`},{id:28,title:"Median of Two Sorted Arrays",difficulty:"Hard",acceptance_rate:"30.0%",description:`Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
Follow up: The overall run time complexity should be O(log (m+n)).`,examples:[{input:"nums1 = [1,3], nums2 = [2]",output:"2.00000"},{input:"nums1 = [1,2], nums2 = [3,4]",output:"2.50000"}],sample_code:`var findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length;
  if (len1 > len2) {
    [nums1, nums2] = [nums2, nums1];
    [len1, len2] = [len2, len1];
  }
  let low = 0, high = len1;
  while (low <= high) {
    let partition1 = Math.floor((low + high) / 2);
    let partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1;
    let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    let minRight1 = partition1 === len1 ? Infinity : nums1[partition1];
    let minRight2 = partition2 === len2 ? Infinity : nums2[partition2];
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((len1 + len2) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    }`},{id:29,title:"Longest Palindromic Substring",difficulty:"Medium",acceptance_rate:"29.3%",description:"Given a string s, return the longest palindromic substring in s.",examples:[{input:"s = 'babad'",output:"'bab'"},{input:"s = 'cbbd'",output:"'bb'"}],sample_code:`var longestPalindrome = function(s) {
  let start = 0, maxLen = 0;
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      left--;
      right++;
    }
    if (right - left - 1 > maxLen) {
      maxLen = right - left - 1;
      start = left + 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  return s.substring(start, start + maxLen);
};`},{id:30,title:"ZigZag Conversion",difficulty:"Medium",acceptance_rate:"38.7%",description:`The string \`s\` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

\`\`\`
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Explanation:
P   A   H   N
A P L S I I G
Y   I   R
\`\`\``,examples:[{input:'{ "s": "PAYPALISHIRING", "numRows": 3 }',output:'"PAHNAPLSIIGYIR"'},{input:'{ "s": "PAYPALISHIRING", "numRows": 4 }',output:'"PINALSIGYAHRPI"'}],sample_code:`var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill('');
  let curRow = 0, goingDown = false;
  for (const c of s) {
    rows[curRow] += c;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }
  return rows.join('');
};`},{id:31,title:"3Sum",difficulty:"Medium",acceptance_rate:"27.9%",description:"Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",examples:[{input:'{ "nums": [-1,0,1,2,-1,-4] }',output:"[[-1,-1,2],[-1,0,1]]"},{input:'{ "nums": [] }',output:"[]"}],sample_code:`var threeSum = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1, k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++, k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};`},{id:32,title:"Maximum Subarray",difficulty:"Easy",acceptance_rate:"52.5%",description:`Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.`,examples:[{input:'{ "nums": [-2,1,-3,4,-1,2,1,-5,4] }',output:"6"},{input:'{ "nums": [1] }',output:"1"}],sample_code:`var maxSubArray = function(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};`},{id:33,title:"Regular Expression Matching",difficulty:"Hard",acceptance_rate:"28.9%",description:`Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.`,examples:[{input:'{ "s": "aa", "p": "a" }',output:"false"},{input:'{ "s": "aa", "p": ".*" }',output:"true"}],sample_code:`var isMatch = function(s, p) {
  if (p.length === 0) return s.length === 0;
  const firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.');
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p));
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
};`},{id:34,title:"Word Ladder",difficulty:"Medium",acceptance_rate:"28.5%",description:`Given two words beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.`,examples:[{input:'{ "beginWord": "hit", "endWord": "cog", "wordList": ["hot","dot","dog","lot","log","cog"] }',output:"5"},{input:'{ "beginWord": "hit", "endWord": "cog", "wordList": ["hot","dot","dog","lot","log"] }',output:"0"}],sample_code:`var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  const visited = new Set();
  visited.add(beginWord);
  let queue = [beginWord];
  let level = 1;
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const currWord = queue.shift();
      if (currWord === endWord) return level;
      for (let j = 0; j < currWord.length; j++) {
        for (let k = 0; k < 26; k++) {
          const nextChar = String.fromCharCode(97 + k);
          const newWord = currWord.slice(0, j) + nextChar + currWord.slice(j + 1);
          if (wordSet.has(newWord) && !visited.has(newWord)) {
            visited.add(newWord);
            queue.push(newWord);
          }
        }
      }
    }
    level++;
  }
  return 0;
};`},{id:35,title:"3Sum Closest",difficulty:"Medium",acceptance_rate:"39.5%",description:"Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.",examples:[{input:'{ "nums": [-1,2,1,-4], "target": 1 }',output:"2"},{input:'{ "nums": [0,0,0], "target": 1 }',output:"0"}],sample_code:`var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) closestSum = sum;
      if (sum === target) return target;
      if (sum < target) left++;
      else right--;
    }
  }
  return closestSum;
};`},{id:36,title:"Spiral Matrix",difficulty:"Medium",acceptance_rate:"37.4%",description:"Given an m x n matrix, return all elements of the matrix in spiral order.",examples:[{input:"[[1,2,3],[4,5,6],[7,8,9]]",output:"[1,2,3,6,9,8,7,4,5]"},{input:"[[1,2],[3,4]]",output:"[1,2,4,3]"}],sample_code:`var spiralOrder = function(matrix) {
  const result = [];
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1, direction = 'right';
  while (top <= bottom && left <= right) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = 'down';
    } else if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = 'left';
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = 'up';
    } else if (direction === 'up') {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = 'right';
    }
  }
  return result;
};`},{id:37,title:"Median of Two Sorted Arrays",difficulty:"Hard",acceptance_rate:"30.0%",description:`Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
Follow up: The overall run time complexity should be O(log (m+n)).`,examples:[{input:"nums1 = [1,3], nums2 = [2]",output:"2.00000"},{input:"nums1 = [1,2], nums2 = [3,4]",output:"2.50000"}],sample_code:`var findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length;
  if (len1 > len2) {
    [nums1, nums2] = [nums2, nums1];
    [len1, len2] = [len2, len1];
  }
  let low = 0, high = len1;
  while (low <= high) {
    let partition1 = Math.floor((low + high) / 2);
    let partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1;
    let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    let minRight1 = partition1 === len1 ? Infinity : nums1[partition1];
    let minRight2 = partition2 === len2 ? Infinity : nums2[partition2];
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((len1 + len2) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    }`},{id:38,title:"Longest Palindromic Substring",difficulty:"Medium",acceptance_rate:"29.3%",description:"Given a string s, return the longest palindromic substring in s.",examples:[{input:"s = 'babad'",output:"'bab'"},{input:"s = 'cbbd'",output:"'bb'"}],sample_code:`var longestPalindrome = function(s) {
  let start = 0, maxLen = 0;
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      left--;
      right++;
    }
    if (right - left - 1 > maxLen) {
      maxLen = right - left - 1;
      start = left + 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  return s.substring(start, start + maxLen);
};`},{id:39,title:"ZigZag Conversion",difficulty:"Medium",acceptance_rate:"38.7%",description:`The string \`s\` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

\`\`\`
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Explanation:
P   A   H   N
A P L S I I G
Y   I   R
\`\`\``,examples:[{input:'{ "s": "PAYPALISHIRING", "numRows": 3 }',output:'"PAHNAPLSIIGYIR"'},{input:'{ "s": "PAYPALISHIRING", "numRows": 4 }',output:'"PINALSIGYAHRPI"'}],sample_code:`var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill('');
  let curRow = 0, goingDown = false;
  for (const c of s) {
    rows[curRow] += c;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }
  return rows.join('');
};`},{id:40,title:"3Sum",difficulty:"Medium",acceptance_rate:"27.9%",description:"Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",examples:[{input:'{ "nums": [-1,0,1,2,-1,-4] }',output:"[[-1,-1,2],[-1,0,1]]"},{input:'{ "nums": [] }',output:"[]"}],sample_code:`var threeSum = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1, k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++, k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};`}];function C(){const{id:e}=W(),a=y.find(u=>u.id==e),[r,l]=w.useState(!1),t={backgroundColor:"#1d1d1d"},o=r?{...t,...{backgroundColor:"#1b7fcb"}}:t;return n("div",{id:"problemPage",children:i(k,{style:{height:"100vh",width:"100vw"},renderBar:({onMouseDown:u,...d})=>n("div",{...d,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),style:{background:"transparent",width:"7px"},children:n("div",{onMouseDown:u,style:o})}),children:[n(G,{problem:a}),n(H,{problem:a})]})})}const Y=({problem:e,bgClass:a,diffClass:r})=>i("div",{className:`problem-container ${a}`,children:[i("div",{className:"title",children:[" ",n(p,{id:"problem-link",to:`/${e.id}`,children:i("p",{children:[e.id,". ",e.title]})})]}),n("div",{className:"acceptance",children:n("p",{children:e.acceptance_rate})}),i("div",{className:"difficulty",children:[" ",n("p",{className:r,children:e.difficulty})," "]})]},e.id),b=(e,a)=>{let r=a-e+1;return Array.from({length:r},(l,t)=>t+e)},f="...",_=({totalCount:e,pageSize:a,siblingCount:r=1,currentPage:l})=>w.useMemo(()=>{const s=Math.ceil(e/a);if(r+5>=s)return b(1,s);const u=Math.max(l-r,1),d=Math.min(l+r,s),c=u>2,h=d<s-2,m=1,L=s;if(!c&&h){let g=3+2*r;return[...b(1,g),f,s]}if(c&&!h){let g=3+2*r,v=b(s-g+1,s);return[m,f,...v]}if(c&&h){let g=b(u,d);return[m,f,...g,f,L]}},[e,a,r,l]);const E=e=>{const{onPageChange:a,totalCount:r,siblingCount:l=1,currentPage:t,pageSize:s,className:o}=e,u=_({currentPage:t,totalCount:r,siblingCount:l,pageSize:s});if(t===0||u.length<2)return null;const d=()=>{a(t+1)},c=()=>{a(t-1)};let h=u[u.length-1];return i("ul",{className:x("pagination-container",{[o]:o}),children:[n("li",{className:x("pagination-item",{disabled:t===1}),onClick:c,children:n("div",{className:"arrow left"})},"prev"),u.map(m=>m===f?n("li",{className:"pagination-item dots",children:"…"},Math.random()):n("li",{className:x("pagination-item",{selected:m===t}),onClick:()=>a(m),children:m},m)),n("li",{className:x("pagination-item",{disabled:t===h}),onClick:d,children:n("div",{className:"arrow right"})},"next")]})},q=()=>{const[e,a]=w.useState(10),[r,l]=w.useState(1),t=w.useMemo(()=>{const o=(r-1)*e,u=o+e;return y.slice(o,u)},[r,e]);function s(o){const u=parseInt(o.target.value),d=Math.ceil(y.length/u),c=Math.min(r,d);a(u),l(c)}return i("div",{id:"problems",children:[i("div",{className:"problems-header",children:[n("div",{className:"title",children:n("p",{children:"Title"})}),n("div",{className:"acceptance",children:n("p",{children:"Acceptance"})}),n("div",{className:"difficulty",children:n("p",{children:"Difficulty"})})]}),t.map((o,u)=>{const c=u%2===0?"even":"odd";let h=o.difficulty,m;return h==="Hard"?m="red":h==="Medium"?m="yellow":m="green",n(Y,{problem:o,bgClass:c,diffClass:m},o.id)}),i("div",{className:"pagination-box",children:[n("div",{className:"pagination-limit",children:i("select",{name:"pageSize",id:"pageSize",value:e,onChange:s,children:[n("option",{value:5,children:"5 / page"}),n("option",{defaultValue:!0,value:10,children:"10 / page"}),n("option",{value:20,children:"20 / page"})]})}),n("div",{className:"pagination-buttons",children:n(E,{className:"pagination-bar",currentPage:r,totalCount:y.length,pageSize:e,onPageChange:o=>l(o)})})]})]})},z=()=>n("div",{id:"problemsListPage",children:n(q,{})});const S="/assets/leetcode_logo-94e3af26.svg",T=()=>i("div",{className:"signin-container",children:[n("div",{className:"logo",children:n("img",{src:S,alt:"logo"})}),i("form",{className:"form-signin",children:[n("input",{type:"email",id:"inputEmail",placeholder:"Email address",required:!0,autoFocus:!0}),n("input",{type:"password",id:"inputPassword",className:"",placeholder:"Password",required:!0}),n("button",{id:"btn-signin",type:"submit",children:"Sign in"})]})]});const D=()=>n("div",{id:"signInPage",children:n(T,{})});const U=()=>i("div",{className:"signup-container",children:[n("div",{className:"logo",children:n("img",{src:S,alt:"logo"})}),i("form",{className:"form-signup",children:[n("input",{type:"email",id:"inputEmail",placeholder:"Email address",required:!0,autoFocus:!0}),n("input",{type:"password",id:"inputPassword",placeholder:"Password",required:!0}),n("button",{id:"btn-signup",type:"submit",children:"Sign up"})]})]});const F=()=>n("div",{id:"signUpPage",children:n(U,{})});const O="data:image/png;base64,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",Z=()=>i("div",{id:"navbar",children:[i("ul",{className:"nav-left",children:[n("li",{id:"navLogo",children:n(p,{to:"/",className:"nav-link",id:"nav-logo-link",children:n("img",{src:O,width:"22px"})})}),n("li",{id:"navExplore",children:n(p,{to:"/",className:"nav-link",id:"explore-link",children:n("p",{children:"Explore"})})}),n("li",{id:"navProblems",children:n(p,{to:"/problems",className:"nav-link",id:"problems-link",children:n("p",{children:"Problems"})})})]}),i("ul",{className:"nav-right",children:[n("li",{id:"navPremium",children:n(p,{className:"nav-link",id:"premium-link",children:n("p",{children:"Premium"})})}),n("li",{id:"navSignup",children:n(p,{to:"/signup",className:"nav-link",id:"signup-link",children:n("p",{children:"Signup"})})}),n("li",{id:"navSignin",children:n(p,{to:"/signin",className:"nav-link",id:"signin-link",children:n("p",{children:"Signin"})})})]})]});const V=()=>i("div",{id:"explorePage",children:[n(Z,{}),i("div",{id:"explore-hero",children:[n("h4",{children:"Welcome to"}),n("h1",{children:"LeetCode"})]})]}),B=j([{path:"/",element:n(V,{})},{path:"/signin",element:n(D,{})},{path:"/signup",element:n(F,{})},{path:"/problems",element:n(z,{})},{path:"/:id",element:n(C,{})}]);function K(){return n(N,{router:B})}M.createRoot(document.getElementById("root")).render(n(A.StrictMode,{children:n(K,{})}));
