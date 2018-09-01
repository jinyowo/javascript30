branch_name=`git rev-parse --abbrev-ref HEAD`
issue_number=`echo ${branch_name} | cut -d '-' -f1`
first_line=`head -n1 ${$1}`

if [ -z "$first_line" ]; then
    sed -i ".bak" "1s/^/[#$issue_number] /" $1
fi