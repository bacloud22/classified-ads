export const topTagsTemplate = `
    <% for (var i = 0; tags.length> 0 && i < tags.length && i < 10 ; i++) { %>
        <div class="w-100">
            <a href="/tag/<%=tags[i].tag %>"><span class="badge bg-secondary"><%=tags[i].tag %></span></a>
        </div>
    <% }%>    
`